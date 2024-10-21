import { useState } from "react";
import Checkbox from "../checkbox";

const Checklist = ({ disciplines, services, onChange, disabled }) => {
    const [selectedDisciplines, setSelectedDisciplines] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    const handleDisciplineChange = (discipline) => {
        const updatedDisciplines = selectedDisciplines.includes(discipline)
            ? selectedDisciplines.filter(item => item !== discipline)
            : [...selectedDisciplines, discipline];

        setSelectedDisciplines(updatedDisciplines);
        onChange(updatedDisciplines, selectedServices);
    };

    const handleServiceChange = (service) => {
        const updatedServices = selectedServices.includes(service)
            ? selectedServices.filter(item => item !== service)
            : [...selectedServices, service];

        setSelectedServices(updatedServices);
        onChange(selectedDisciplines, updatedServices);
    };

    return (
        <div className="flex flex-col mb-4">
            <div className="font-normal mt-2 text-xs md:text-sm text-primary-dark mb-2">1. Disciplinas</div>
            <div className="flex flex-wrap gap-y-2 gap-x-4">
                {disciplines.map((discipline, index) => (
                    <Checkbox
                        key={index}
                        label={discipline}
                        checked={selectedDisciplines.includes(discipline)}
                        onChange={() => handleDisciplineChange(discipline)}
                        disabled={disabled} // Passa a propriedade disabled para o Checkbox
                    />
                ))}
            </div>

            <div className="mt-4">
                <hr />
            </div>

            <div className="font-normal text-xs md:text-sm text-primary-dark mt-2 mb-2">2. Serviços</div>
            <div className="flex gap-y-2 flex-col">
                {services.map((service, index) => (
                    <Checkbox
                        key={index}
                        label={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        disabled={disabled} // Passa a propriedade disabled para o Checkbox
                    />
                ))}
            </div>
        </div>
    );
};

export default Checklist;
