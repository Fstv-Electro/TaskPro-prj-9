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
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

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

    const start = lists.filter(item => item._id === source.droppableId)[0];
    const finish = lists.filter(
      item => item._id === destination.droppableId
    )[0];
    // const finish = lists[destination.droppableId];

    if (start === finish) {
      const newTaskOrder = Array.from(start.taskOrder);
      console.log(newTaskOrder);
      newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, draggableId);
      console.log(newTaskOrder);

      // const newColumn = {
      //   ...start,
      //   taskOrder: newTaskOrder,
      // };

      // const newState = {
      //   ...dashBoard,
      //   columns: {
      //     ...dashBoard.columns,
      //     [newColumn._id]: newColumn,
      //   },
      // };

      const columnId = start._id;
      // console.log({ columnId, newTaskOrder });
      dispatch(updateTaskOrder({ columnId, newTaskOrder }));
      dispatch(updateTaskOrderState({ columnId, newTaskOrder }));

      return;
    }

    // // Moving from one list to another
    // const startTaskOrder = Array.from(start.taskOrder);

    // startTaskOrder.splice(source.index, 1);
    // const newStart = {
    //   ...start,
    //   taskOrder: startTaskOrder,
    // };

    // const finishTaskOrder = Array.from(finish.taskOrder);
    // finishTaskOrder.splice(destination.index, 0, draggableId);
    // const newFinish = {
    //   ...finish,
    //   taskOrder: finishTaskOrder,
    // };

    // const newState = {
    //   ...dashBoard,
    //   columns: {
    //     ...dashBoard.columns,
    //     [newStart._id]: newStart,
    //     [newFinish._id]: newFinish,
    //   },
    // };

    // // console.log('newState', newState);
    // const movedTask = dashBoard.tasks[draggableId];
    // const columnSource = source.droppableId;
    // const columnSourceOrder = {
    //   [columnSource]: newState.columns[columnSource].taskOrder,
    // };
    // const columnDestination = destination.droppableId;
    // const columnDestinationOrder = {
    //   [columnDestination]: newState.columns[columnDestination].taskOrder,
    // };
    // const taskId = movedTask._id;

    // dispatch(
    //   moveTaskToColumn({
    //     taskId,
    //     columnSourceOrder,
    //     columnDestinationOrder,
    //   })
    // );
    // setDashBoard(newState);
  };

  // function sortTasks(tasks, sortingOrder) {
  //   const result = [];
  //   for (let i = 0; i < tasks.length; i++) {
  //     result[sortingOrder.indexOf(tasks[i]._id)] = tasks[i];
  //   }
  //   return result;
  // }

  return (
    <>
      {currentBoard && lists && isLoading === false && (
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
                    // console.log('lists', lists);
                    const column = lists.filter(n => n._id === columnId)[0];
                    // console.log('column', column);
                    const filteredTasks = visibleTasks.filter(
                      n => n.parentColumn === column._id
                    );

                    // console.log(filteredTasks, 'filteredTasks');

                    // const tasks = column.taskOrder.map(n => dashBoard.tasks[n]);

                    // {dashBoard.board.columnOrder.map((columnId, index) => {
                    //   const column = dashBoard.columns[columnId];
                    //   const tasks = column.taskOrder.map(n => dashBoard.tasks[n]);
                    // const filteredTasks = dashBoard.tasks.filter(
                    //   task => task.parentColumn === columnId
                    // );
                    // console.log(filteredTasks);
                    // const sortedTasks = sortTasks(
                    //   filteredTasks,
                    //   column.taskOrder
                    // );

                    // const filteredTasks = visibleTasks.filter(
                    //   task => task.parentColumn === column._id
                    // );

                    return (
                      <Column
                        key={column._id}
                        column={column}
                        tasks={filteredTasks}
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
