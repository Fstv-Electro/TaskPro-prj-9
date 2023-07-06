import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { AddColumn } from 'components/addColumn/addColumn';
import { Column } from 'components/column/column';
import { Container, List } from './board.styled';
import { AddCardForm } from '../addCardForm/addCardForm';
import { Modal } from 'components/modal/modal';
import axios from 'axios';

import {
  selectList,
  selectCurrentBoard,
  selectBoard,
} from 'redux/dashboards/selectors';

export const Board = () => {
  const boardId = useSelector(selectCurrentBoard);
  const boards = useSelector(selectBoard);
  const lists = useSelector(selectList);
  const [isOpen, setIsOpen] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const [dashBoard, setDashBoard] = useState(null);

  useEffect(() => {
    if (lists.length === 0) return;
    const columnsMod = Object.fromEntries(lists.map(n => [n._id, n]));
    const tasks = lists.map(column => column.tasks).flat(1);
    const tasksMod = Object.fromEntries(tasks.map(n => [n._id, n]));
    const board = boards.find(n => n._id === boardId);
    const set = { board, columns: columnsMod, tasks: tasksMod };
    setDashBoard(set);
    console.log(set);
  }, [lists, boardId, boards]);

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
      const newColumnOrder = Array.from(dashBoard.board.columnOrder);

      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...dashBoard,
        board: {
          ...dashBoard.board,
          columnOrder: newColumnOrder,
        },
      };

      // update columns on server
      const updateColumnOrder = async () => {
        try {
          await axios.patch(`/api/boards/columnorder/${boardId}`, {
            columnOrder: newColumnOrder,
          });
        } catch (error) {
          console.log(error);
        }
      };
      updateColumnOrder();
      setDashBoard(newState);

      return;
    }

    // if tasks moved
    const start = dashBoard.columns[source.droppableId];
    const finish = dashBoard.columns[destination.droppableId];

    if (start === finish) {
      const newTaskOrder = Array.from(start.taskOrder);
      newTaskOrder.splice(source.index, 1);
      newTaskOrder.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskOrder: newTaskOrder,
      };

      const newState = {
        ...dashBoard,
        columns: {
          ...dashBoard.columns,
          [newColumn._id]: newColumn,
        },
      };
      console.log(newState);

      const updateTaskOrder = async () => {
        const columnId = start._id;
        try {
          await axios.patch(`/api/columns/taskorder/${columnId}`, {
            taskOrder: newTaskOrder,
          });
        } catch (error) {
          console.log(error);
        }
      };
      updateTaskOrder();

      setDashBoard(newState);
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

    const newState = {
      ...dashBoard,
      columns: {
        ...dashBoard.columns,
        [newStart._id]: newStart,
        [newFinish._id]: newFinish,
      },
    };
    const movedTask = dashBoard.tasks[draggableId];
    const columnSource = source.droppableId;
    const columnSourceOrder = {
      [columnSource]: newState.columns[columnSource].taskOrder,
    };
    const columnDestination = destination.droppableId;
    const columnDestinationOrder = {
      [columnDestination]: newState.columns[columnDestination].taskOrder,
    };

    const updateTaskWithColumn = async () => {
      const taskId = movedTask._id;

      try {
        await axios.patch(`/api/tasks/movetask/${taskId}`, {
          columnSourceOrder,
          columnDestinationOrder,
        });
      } catch (error) {
        console.log(error);
      }
    };
    updateTaskWithColumn();

    setDashBoard(newState);
  };

  return (
    <>
      {dashBoard && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {provided => (
              <Container ref={provided.innerRef} {...provided.droppableProps}>
                <List>
                  {dashBoard.board.columnOrder.map((columnId, index) => {
                    const column = dashBoard.columns[columnId];
                    const tasks = column.taskOrder.map(n => dashBoard.tasks[n]);

                    return (
                      <Column
                        key={column._id}
                        column={column}
                        tasks={tasks}
                        index={index}
                        handleClick={handleClick}
                      />
                    );
                  })}
                  {provided.placeholder}
                </List>

                <AddColumn
                  boardId={boardId}
                  numberOfColumns={Number(lists.length)}
                />

                {isOpen && (
                  <Modal
                    onClose={toggleModal}
                    children={
                      <AddCardForm
                        onClose={toggleModal}
                        columnId={currentColumnId}
                      />
                    }
                  />
                )}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
};

//   <Container>
//     {lists.length > 0 && (
//       <List>
//         {lists.map(({ _id, title }) => {
//           return (
// <Item key={_id}>
//   <ColumnItem item={{ _id, title }} />
//   {/*  */}
//   <AddList columnId={_id} />
//   {/*  */}
//  <SubmitButton
//   title="Add another card"
//   type="button"
//   width={334}
//   height="56"
//   icon={true}
//   handleClick={() => {
//     setCurrentColumnId(_id);
//     toggleModal();
//   }}
// />

// {isOpen && (
//   <Modal
//     onClose={toggleModal}
//     children={
//       <AddCardForm
//         onClose={toggleModal}
//         columnId={currentColumnId || _id}
//       />
//     }
//   />
// )}
// </Item>
//           );
//         })}
//       </List>
//     )}
//     <AddColumn boardId={boardId} numberOfColumns={Number(lists.length)} />
//   </Container>
