import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarEmpleado = () => {
  const { id } = useParams(); // Obtener el id del empleado desde la URL
  const navigate = useNavigate();

  // Simulación de empleados registrados (en una aplicación real, podrías hacer una solicitud a la base de datos)
  const empleados = [
    { id: 1, nombre: 'Juan Pérez', puesto: 'Desarrollador' },
    { id: 2, nombre: 'Ana García', puesto: 'Gerente' },
    { id: 3, nombre: 'Luis Sánchez', puesto: 'Diseñador' },
  ];

  // Declaración de hooks de estado
  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [empleado, setEmpleado] = useState(null);

  // Inicializar los datos del empleado si existe
  useEffect(() => {
    const empleadoEncontrado = empleados.find(emp => emp.id === parseInt(id));
    if (empleadoEncontrado) {
      setEmpleado(empleadoEncontrado);
      setNombre(empleadoEncontrado.nombre);
      setPuesto(empleadoEncontrado.puesto);
    }
  }, [id, empleados]);

  // Si no se encuentra el empleado, mostrar un mensaje
  if (!empleado) {
    return <div>Empleado no encontrado</div>;
  }

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se actualizarían los datos del empleado (en la base de datos, por ejemplo)
    console.log('Empleado editado:', { id, nombre, puesto });
    navigate('/admin/lista-empleados'); // Redirige de vuelta a la lista de empleados
  };

  return (
    <div>
      <h2>Editar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Puesto:</label>
          <input
            type="text"
            value={puesto}
            onChange={(e) => setPuesto(e.target.value)}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarEmpleado;
