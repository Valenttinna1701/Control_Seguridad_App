import React, { useState } from 'react';
import './style/ListaEmpleados.css'

const Empleados = () => {
  // Estado para mantener la lista de empleados
  const [empleados, setEmpleados] = useState([
    { id: 1, nombre: 'Juan Pérez', puesto: 'Desarrollador' },
    { id: 2, nombre: 'Ana García', puesto: 'Gerente' },
    { id: 3, nombre: 'Luis Sánchez', puesto: 'Diseñador' },
  ]);

  // Estado para manejar los datos del formulario
  const [empleado, setEmpleado] = useState({
    id: null, // Agregado para identificar si es edición
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    puesto: '',
  });

  // Estado para saber si estamos editando o creando
  const [isEditing, setIsEditing] = useState(false);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({
      ...empleado,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Editar empleado existente
      setEmpleados((prevEmpleados) =>
        prevEmpleados.map((emp) =>
          emp.id === empleado.id ? { ...empleado } : emp
        )
      );
      setIsEditing(false);
    } else {
      // Crear nuevo empleado
      const nuevoEmpleado = {
        id: Date.now(), // Generar un id único basado en la fecha
        ...empleado,
      };
      setEmpleados((prevEmpleados) => [...prevEmpleados, nuevoEmpleado]);
    }

    // Limpiar el formulario después de agregar o editar
    setEmpleado({
      id: null,
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      direccion: '',
      puesto: '',
    });
  };

  // Maneja la edición de un empleado
  const handleEdit = (empleado) => {
    setEmpleado(empleado);
    setIsEditing(true);
  };

  return (
    
        <div className="empleados-container">
          <h2 className="form-title">Lista de Empleados</h2>
          <ul className="empleados-list">
            {empleados.map((empleado) => (
              <li key={empleado.id} className="empleado-item">
                <div className="empleado-info">
                  {empleado.nombre} - {empleado.puesto}
                </div>
                <button className="edit-button" onClick={() => handleEdit(empleado)}>
                  Editar
                </button>
              </li>
            ))}
          </ul>
    
          <h2 className="form-title">
            {isEditing ? 'Editar Empleado' : 'Registrar Nuevo Empleado'}
          </h2>
          <form className="empleado-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="nombre">Nombre</label>
              <input
                className="form-input"
                type="text"
                id="nombre"
                name="nombre"
                value={empleado.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="apellido">Apellido</label>
              <input
                className="form-input"
                type="text"
                id="apellido"
                name="apellido"
                value={empleado.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="correo">Correo Electrónico</label>
              <input
                className="form-input"
                type="email"
                id="correo"
                name="correo"
                value={empleado.correo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="telefono">Teléfono</label>
              <input
                className="form-input"
                type="text"
                id="telefono"
                name="telefono"
                value={empleado.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="direccion">Dirección</label>
              <input
                className="form-input"
                type="text"
                id="direccion"
                name="direccion"
                value={empleado.direccion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="puesto">Puesto</label>
              <input
                className="form-input"
                type="text"
                id="puesto"
                name="puesto"
                value={empleado.puesto}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              className={`submit-button ${isEditing ? 'editing' : ''}`} 
              type="submit"
            >
              {isEditing ? 'Guardar Cambios' : 'Registrar Empleado'}
            </button>
          </form>
        </div>
      );
    };

export default Empleados;
