import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {
  selectVisibleCards,
  selectIsLoading,
  selectCurrentBoardData,
  selectList,
} from 'redux/dashboards/selectors';
import {
  updateColumnOrder,
  updateTaskOrder,
  moveTaskToColumn,
} from 'redux/dashboards/operations';
import {
  updateColumnOrderState,
  updateTaskOrderState,
  moveTaskToColumnState,
} from 'redux/dashboards/slice';
import { AddColumn } from 'components/addColumn/addColumn';
import { Column } from 'components/column/column';
import { Container, List } from './board.styled';
import { AddCardForm } from '../addCardForm/addCardForm';
import { Modal } from 'components/modal/modal';

export const Board = () => {
  const currentBoard = useSelector(selectCurrentBoardData);
  const lists = useSelector(selectList);
  const visibleTasks = useSelector(selectVisibleCards);
  const isLoading = useSelector(selectIsLoading);
  const boardId = currentBoard._id;

  const [isOpen, setIsOpen] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleClick = _id => {
    setCurrentColumnId(_id);
    toggleModal();
  };

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    // if nothing change
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // if columns moved
    if (type === 'column') {
      const newColumnOrder = Array.from(currentBoard.columnOrder);

      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      dispatch(updateColumnOrder({ boardId, newColumnOrder }));
      dispatch(updateColumnOrderState({ boardId, newColumnOrder }));

      return;
    }

    // if tasks moved inside column
    const start = lists.filter(n => n._id === source.droppableId)[0];
    const finish = lists.filter(n => n._id === destination.droppableId)[0];

    if (start === finish) {
      const newTaskOrder = Array.from(start.taskOrder);
      newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, draggableId);
      const columnId = start._id;
      dispatch(updateTaskOrder({ columnId, newTaskOrder }));
      dispatch(updateTaskOrderState({ columnId, newTaskOrder }));

      return;
    }

    // Moving from one list to another
    const startTaskOrder = Array.from(start.taskOrder);

    startTaskOrder.splice(source.index, 1);
    const newStart = {
      ...start,
      taskOrder: startTaskOrder,
    };

    const finishTaskOrder = Array.from(finish.taskOrder);
    finishTaskOrder.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskOrder: finishTaskOrder,
    };

    const column = lists.find(column =>
      column.tasks.find(task => task._id === draggableId)
    );
    const task = column.tasks.find(task => task._id === draggableId);
    const movedTask = { ...task, parentColumn: finish._id };

    const columnSource = source.droppableId;
    const columnSourceOrder = {
      [columnSource]: newStart.taskOrder,
    };

    const columnDestination = destination.droppableId;
    const columnDestinationOrder = {
      [columnDestination]: newFinish.taskOrder,
    };

    dispatch(
      moveTaskToColumn({
        taskId: draggableId,
        columnSourceOrder,
        columnDestinationOrder,
      })
    );
    dispatch(
      moveTaskToColumnState({
        movedTask,
        startTaskOrder,
        finishTaskOrder,
        columnSource,
        columnDestination,
      })
    );
  };

  function sortTasks(tasks, sortingOrder) {
    const result = [];
    for (let i = 0; i < tasks.length; i++) {
      result[sortingOrder.indexOf(tasks[i]._id)] = tasks[i];
    }
    return result;
  }

  const shouldRender = () => {
    let result = false;
    if (currentBoard && lists.length !== 0 && isLoading === false)
      result = true;
    if (lists?.find(n => n.parentBoard !== currentBoard._id)) result = false;
    return result;
  };

  return (
    <>
      {shouldRender() && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {provided => (
              <Container ref={provided.innerRef} {...provided.droppableProps}>
                <List>
                  {currentBoard.columnOrder.map((columnId, index) => {
                    const column = lists.filter(n => n._id === columnId)[0];

                    const filteredTasks = visibleTasks.filter(
                      task => task.parentColumn === column._id
                    );

                    const sortedTasks = sortTasks(
                      filteredTasks,
                      column.taskOrder
                    );

                    return (
                      <Column
                        key={column._id}
                        column={column}
                        tasks={sortedTasks}
                        index={index}
                        handleClick={handleClick}
                      />
                    );
                  })}
                  {provided.placeholder}
                </List>
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      )}
      <AddColumn
        boardId={currentBoard._id}
        numberOfColumns={Number(lists.length)}
      />
      {isOpen && (
        <Modal
          onClose={toggleModal}
          children={
            <AddCardForm onClose={toggleModal} columnId={currentColumnId} />
          }
        />
      )}
    </>
  );
};
