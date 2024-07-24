import React, { useState } from 'react';
import './Embarcacion.scss';
import { FloatingLabel, Form, Button, Alert } from 'react-bootstrap';
import { createEmbarcacionRequest } from '../../../api/embarcacion';

const Embarcacion: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo_embarcacion: '',
    tipo_material: '',
    capacidad_maxima: '',
    peso_embarcacion: '',
    fecha_fabricacion: '',
    cantidad_motor: '',
  });

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<
    'success' | 'danger' | undefined
  >(undefined);

  const handleStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await createEmbarcacionRequest(formData);
      const data = await res.json();

      if (res.status >= 200 && res.status < 300) {
        console.log(data);
        setMessage('La embarcación se ha registrado correctamente');
        setMessageType('success');
        console.log(res.json);
      } else {
        console.error('Error:', data);
        setMessage('Hubo un error al registrar la embarcación');
        setMessageType('danger');
      }
    } catch (error) {
      console.error('Error al registrar la embarcación:', error);
      setMessage('Hubo un error al registrar la embarcación');
      setMessageType('danger');
    }

    setTimeout(() => {
      setMessage(null);
      setMessageType(undefined);
    }, 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <div className="register-form">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title" style={{ textAlign: 'center' }}>
            Registrar Embarcación
          </h3>{' '}
          <br />
          {message && (
            <div className="alert-container">
              <Alert variant={messageType}>{message}</Alert>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <FloatingLabel
                  controlId="floatingNombre"
                  label="Nombre"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                    value={formData.nombre}
                    onChange={handleStringChange}
                    name="nombre"
                  />
                </FloatingLabel>
                <div className="floating">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelectGrid"
                      aria-label="Floating label select example"
                      value={formData.tipo_embarcacion}
                      onChange={handleSelectChange}
                      name="tipo_embarcacion"
                    >
                      <option selected disabled>
                        Seleccion un tipo
                      </option>
                      <option value="Carga de Pasajero">
                        Carga de Pasajero
                      </option>
                      <option value="Carga Pesada">Carga pesada</option>
                      <option value="Bote Pesquero">Bote Pesquero</option>
                    </select>
                    <label htmlFor="floatingSelectGrid">Tipo Embarcacion</label>
                  </div>
                </div>
                <div className="floating">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="tipo_material"
                      aria-label="Floating label select example"
                      value={formData.tipo_material}
                      onChange={handleSelectChange}
                      name="tipo_material"
                    >
                      <option selected disabled>
                        Seleccion un tipo
                      </option>
                      <option value="Hierro">Hierro</option>
                      <option value="Metal">Metal</option>
                      <option value="Madera">Madera</option>
                    </select>
                    <label htmlFor="tipo_material">Tipo de Material</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <FloatingLabel
                  controlId="floatingCapacidad"
                  label="Capacidad Maxima"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Capacidad Maxima"
                    className="form-control"
                    value={formData.capacidad_maxima}
                    onChange={handleNumberChange}
                    name="capacidad_maxima"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingRegistro"
                  label="Peso(kg)"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Peso(kg)"
                    className="form-control"
                    value={formData.peso_embarcacion}
                    onChange={handleNumberChange}
                    name="peso_embarcacion"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPropietario"
                  label="Fecha de Fabricacion"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    placeholder="Fecha de Fabricacion"
                    className="form-control"
                    value={formData.fecha_fabricacion}
                    onChange={handleStringChange}
                    name="fecha_fabricacion"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPais"
                  label="Cantidad de Motores"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Cantidad de Motores"
                    className="form-control"
                    value={formData.cantidad_motor}
                    onChange={handleNumberChange}
                    name="cantidad_motor"
                  />
                </FloatingLabel>
              </div>
            </div>
            <Button type="submit" className="btn-primary" id="submit-button">
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Embarcacion;
