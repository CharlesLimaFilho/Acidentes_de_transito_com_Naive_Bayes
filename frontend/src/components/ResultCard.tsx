import '../styles/ResultCard.css';
import { CLASS_CONFIG } from '../services/classConfig';

interface Props {
  result: number;
  confianca: number;
}

export function ResultCard({ result, confianca }: Props) {
  const config = CLASS_CONFIG[result];

  if (!config) {
    return (
      <div className="result-card result-card--safe">
        <h3>Resultado desconhecido</h3>
      </div>
    );
  }

  return (
    <div className={`result-card ${config.modifier}`}>
      <h3>{config.label}</h3>
      <p>{config.message}</p>
      <p>Tenho {confianca}% de certeza em relação a essa previsão</p>
    </div>
  );
}
