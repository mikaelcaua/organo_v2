import './CampoTexto.css';

interface CampoTextoProps {
    name: string;
    aoAlterar: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CampoTexto({ name, aoAlterar }: CampoTextoProps) {
    return (
        <div className='campotexto'>
            <label>{name}</label>
            <input placeholder={`Insira seu ${name.toLowerCase()}...`} onChange={aoAlterar} />
        </div>
    );
}