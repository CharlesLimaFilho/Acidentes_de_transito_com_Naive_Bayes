export const CLASS_CONFIG: Record<string, {
  label: string;
  modifier: string;
  message: string;
}> = {
  '/NaoAcidente': {
    label: 'Sem acidente',
    modifier: 'result-card--safe',
    message: '✅ Fluxo normal.',
  },
  '/Moderado': {
    label: 'Acidente de trânsito moderado',
    modifier: 'result-card--moderado',
    message: '⚠️ Autoridades de trânsito notificadas.',
  },
  '/Grave': {
    label: 'Acidente de trânsito grave',
    modifier: 'result-card--grave',
    message: '⚠️ Serviços de emergência notificados.',
  },
};