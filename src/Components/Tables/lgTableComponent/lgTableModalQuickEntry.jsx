"use client";

import React from "react";
import { useState, useCallback } from "react";
import { CreateRecord } from "../../Firebase/DataManager/DataOperations";

const LGtableModalQuickEntry = ({ closeModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [selectedOption, setSelectedOption] = useState("");

  const [selectedOptionEstadoCivil, setSelectedOptionEstadoCivil] =
    useState("");

  const [selectedOptionLugarOrigen, setSelectedOptionLugarOrigen] =
    useState("");

  const handleSelectChangeEstadoCivil = (event) => {
    setSelectedOptionEstadoCivil(event.target.value);
  };

  const handleSelectChangeLugarOrigen = (event) => {
    setSelectedOptionLugarOrigen(event.target.value);
  };

  const options = ["Soltero", "Casado", "Separado", "Viudo"];

  const options6 = [
    "Templo Central",
    "Iver Talcahuano",
    "Iver San Clemente",
    "Iver Nancahua",
  ];

  const sampledata = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "✅",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "✅",
      lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "✅",
    },
  ];

  const headers = [
    "Foto",
    "Rut",
    "Nombre",
    "Apellido Paterno",
    "Apellido Materno",
    "Eliminar",
  ];

  const NewDataFields = {
    Rut: "",
    Nombres: "",
    ApellidoMaterno: "",
    ApellidoPaterno: "",
    NumeroContacto: "",
    FechaNacimiento: "",
    Direccion: "",
    email: "",
    FechaIntegracion: "",
    LugarOrigen: "",
  };

  const [newEntryData, setNewEntryData] = useState(NewDataFields);
  console.log(newEntryData);

  const getNewEntryData = useCallback(
    ({ target }) => {
      setNewEntryData({
        ...newEntryData,
        [target.name]: target.value,
      });
    },
    [newEntryData]
  );

  const handleSaveData = async () => {
    try {
      const docId = await CreateRecord("BDGeneralIglesia", newEntryData);
      console.log("Document ID:", docId);
      setNewEntryData(NewDataFields);
      console.log("New entry data set.");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const AccordionComponent0 = () => (
    // <section className="modal-main-data-container">
    <section className="modal-personal-data-section">
      <div className="modal-personal-data-section-container">
        <div className="modal-personal-data-section-right-col">
          <div>
            <div className="form-input">
              <label htmlFor="Rut" className="input-label">
                Rut (Identificador único)
              </label>
              <input
                name="Rut"
                type="text"
                maxLength={8}
                id="InputRut"
                className="input-name"
                placeholder="Ingrese números"
                onChange={getNewEntryData}
                value={newEntryData.Rut}
              />
            </div>
            <div>
              <label htmlFor="" className="input-label">
                Nombres
              </label>
              <input
                type="text"
                id="InputNombres"
                name="Nombres"
                className="input-name"
                placeholder="Nombres"
                onChange={getNewEntryData}
                value={newEntryData.Nombres}
              />
            </div>
            <div>
              <label htmlFor="" className="input-label">
                Apellido Paterno
              </label>
              <input
                name="ApellidoPaterno"
                type="text"
                id="InputAppPaterno"
                className="input-name"
                placeholder="Apellido Paterno"
                onChange={getNewEntryData}
                value={newEntryData.ApellidoPaterno}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="name" className="input-label">
                Apellido Materno
              </label>
              <input
                name="ApellidoMaterno"
                type="text"
                id="InputAppMaterno"
                className="input-name"
                placeholder="Apellido Materno"
                onChange={getNewEntryData}
                value={newEntryData.ApellidoMaterno}
              />
            </div>
            <div>
              <label htmlFor="" className="input-label">
                Fecha Nacimiento
              </label>
              <input
                name="FechaNacimiento"
                type="date"
                id="InputFecNacimiento"
                className="input-name"
                placeholder="01/01/2001"
                onChange={getNewEntryData}
                value={newEntryData.FechaNacimiento}
              />
            </div>
          </div>
        </div>
        <div className="modal-personal-data-section-left-col">
          <div className="input-personal-data-img">
            <img
              src="https://as2.ftcdn.net/v2/jpg/00/10/94/25/1000_F_10942596_BKWQk31AR2MRSUXKO2oD5emgbyUNp2Tq.jpg"
              alt="Nuevo usuario"
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <section className="modal-header-section">
          Agregando Nuevo Registro
        </section>
        <section className="modal-body-section">
          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 0 ? "active" : ""
              }`}
              onClick={() => handleToggle(0)}
            >
              Información Personal
            </div>
            <div className="accordion-content">
              {activeIndex === 0 && (
                <section className="modal-personal-data-section">
                  <div className="modal-personal-data-section-container">
                    <div className="modal-personal-data-section-right-col">
                      <div>
                        <div className="form-input">
                          <label htmlFor="Rut" className="input-label">
                            Rut (Identificador único)
                          </label>
                          <input
                            name="Rut"
                            type="text"
                            maxLength={8}
                            id="InputRut"
                            className="input-name"
                            placeholder="Ingrese números"
                            onChange={getNewEntryData}
                            value={newEntryData.Rut}
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="input-label">
                            Nombres
                          </label>
                          <input
                            type="text"
                            id="InputNombres"
                            name="Nombres"
                            className="input-name"
                            placeholder="Nombres"
                            onChange={getNewEntryData}
                            value={newEntryData.Nombres}
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="input-label">
                            Apellido Paterno
                          </label>
                          <input
                            name="ApellidoPaterno"
                            type="text"
                            id="InputAppPaterno"
                            className="input-name"
                            placeholder="Apellido Paterno"
                            onChange={getNewEntryData}
                            value={newEntryData.ApellidoPaterno}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="name" className="input-label">
                            Apellido Materno
                          </label>
                          <input
                            name="ApellidoMaterno"
                            type="text"
                            id="InputAppMaterno"
                            className="input-name"
                            placeholder="Apellido Materno"
                            onChange={getNewEntryData}
                            value={newEntryData.ApellidoMaterno}
                          />
                        </div>
                        <div>
                          <label htmlFor="" className="input-label">
                            Fecha Nacimiento
                          </label>
                          <input
                            name="FechaNacimiento"
                            type="date"
                            id="InputFecNacimiento"
                            className="input-name"
                            placeholder="01/01/2001"
                            onChange={getNewEntryData}
                            value={newEntryData.FechaNacimiento}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-personal-data-section-left-col">
                      <div className="input-personal-data-img">
                        <img
                          src="https://as2.ftcdn.net/v2/jpg/00/10/94/25/1000_F_10942596_BKWQk31AR2MRSUXKO2oD5emgbyUNp2Tq.jpg"
                          alt="Nuevo usuario"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>

          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 1 ? "active" : ""
              }`}
              onClick={() => handleToggle(1)}
            >
              Información de contacto
            </div>
            <div className="accordion-content">
              {activeIndex === 1 && (
                <section className="modal-personal-data-section">
                  <div>
                    <label htmlFor="" className="input-label">
                      Teléfono Contacto
                    </label>
                    <input
                      name="NumeroContacto"
                      type="text"
                      id="NumeroContacto"
                      className="input-name"
                      placeholder="N Contacto"
                      onChange={getNewEntryData}
                      value={newEntryData.NumeroContacto}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="input-label">
                      Dirección
                    </label>
                    <input
                      name="Direccion"
                      type="text"
                      id="Direccion"
                      className="input-name"
                      placeholder="N Contacto"
                      onChange={getNewEntryData}
                      value={newEntryData.Direccion}
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="input-label">
                      Correo Electrónico
                    </label>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      className="input-name"
                      placeholder="N Contacto"
                      onChange={getNewEntryData}
                      value={newEntryData.email}
                    />
                  </div>
                </section>
              )}
            </div>
          </div>

          <div className="accordion-item">
            <div
              className={`accordion-header ${
                activeIndex === 2 ? "active" : ""
              }`}
              onClick={() => handleToggle(2)}
            >
              Participación en IverChile
            </div>
            <div className="accordion-content">
              {activeIndex === 2 && (
                <section className="modal-personal-data-section">
                  <div>
                    <label htmlFor="" className="input-label">
                      Fec. de Integración
                    </label>
                    <input
                      name="FechaIntegracion"
                      type="date"
                      id="name"
                      className="input-name"
                      onChange={getNewEntryData}
                      value={newEntryData.FechaIntegracion}
                    />
                  </div>

                  <div>
                    <label htmlFor="options" className="input-label">
                      Lugar de origen
                    </label>
                    <select
                      id="options"
                      name="LugarOrigen"
                      className="input-name"
                      onChange={getNewEntryData}
                      value={newEntryData.LugarOrigen}
                    >
                      <option value="Seleccione" selected disabled>
                        Seleccione
                      </option>
                      {options6.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>

        <section className="modal-footer-section">
          {newEntryData.Rut &&
          newEntryData.Nombres &&
          newEntryData.ApellidoPaterno &&
          newEntryData.ApellidoMaterno &&
          newEntryData.NumeroContacto ? (
            <button className="btn-modal" onClick={() => handleSaveData()}>
              Guardar
            </button>
          ) : (
            []
          )}
        </section>
      </div>
    </div>
  );
};

export default LGtableModalQuickEntry;
