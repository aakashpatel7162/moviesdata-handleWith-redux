import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { paths } from '../allroutes/paths';
import './style.css';

const Home = () => {
  const entries = useSelector((state) => state.movies.moviesData); 

  console.log(entries, 'entries')
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Task Manager</h1>

      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task Name</th>
            <th scope="col">Task Detail</th>
            <th scope="col">Completion Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry.id}>
              <th scope="row">{index + 1}</th>
              <td>{entry.taskName}</td>
              <td>{entry.taskDetail}</td>
              <td>{entry.completionDate}</td>
              <td>
                <Link to={`/update/${entry.id}`} className="btn btn-success btn-sm">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={paths.add} className="btn btn-primary mt-3">
        Add Task
      </Link>
    </div>
  );
};

export default Home;
