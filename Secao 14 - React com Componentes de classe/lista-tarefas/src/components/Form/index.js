import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({handleSubmit,handleChange,novaTarefa}){
  return(
    <form onSubmit={handleSubmit} action="#" className="form">
        <input type="text" onChange={handleChange}
              value={novaTarefa} />
        <button type="submit">
          <FaPlus />
        </button>
    </form>
  )
}

// Form.defaultProps = {
//   novaTarefa: 'Sem Tarefa',
// }

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}