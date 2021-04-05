export const dragEnd = (destination, source, draggableId, state) => {

    const start = state.rows[source.droppableId];
    const finish = state.rows[destination.droppableId]
    
    if (start === finish) {
      
      const newMovies = Array.from(start.movieIds);
      newMovies.splice(source.index,  1);
      newMovies.splice(destination.index, 0, Number(draggableId));
      
      const newRow = {
        ...start,
        movieIds: newMovies
      }
      
      return ({rows: {
        ...state.rows,
        [newRow.id]: newRow
      }})

    } else {
      
      const startMovieIds = Array.from(start.movieIds)
      startMovieIds.splice(source.index, 1);
      const newStart = {
        ...start,
        movieIds: startMovieIds,
        }
      const finishMovieIds = Array.from(finish.movieIds)
      finishMovieIds.splice(destination.index, 0, Number(draggableId));
      const newFinish = {
        ...finish,
        movieIds: finishMovieIds
      }
      return {rows: {...state.rows, [newStart.id]: newStart, [newFinish.id]: newFinish}}
  }
}