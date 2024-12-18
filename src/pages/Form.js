import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addMoviesData, updateMoviesData } from '../redux/reducer';
import { paths } from '../allroutes/paths';
import './style.css';

const Form = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const moviesData = useSelector((state) => state.movies.moviesData); 

  const existingMovie = moviesData.find((entry) => entry.id === parseInt(id));
  console.log(useSelector((state) => state.moviesData), "existingMovie")

  useEffect(() => {
    if (existingMovie) {
      setTaskName(existingMovie.taskName);
      setTaskDetail(existingMovie.taskDetail);
      setCompletionDate(existingMovie.completionDate);
    }
  }, [existingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id && existingMovie) {
      dispatch(updateMoviesData({ id: parseInt(id), taskName, taskDetail, completionDate }));
    } else {
      const newTask = {
        id: Date.now(), 
        taskName,
        taskDetail,
        completionDate,
      };
      dispatch(addMoviesData(newTask));
    }

    navigate(paths.home);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">{existingMovie ? 'Update Task' : 'Add New Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskDetail">Task Detail</label>
          <textarea
            className="form-control"
            id="taskDetail"
            value={taskDetail}
            onChange={(e) => setTaskDetail(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="completionDate">Completion Date</label>
          <input
            type="date"
            className="form-control"
            id="completionDate"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {existingMovie ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default Form;
