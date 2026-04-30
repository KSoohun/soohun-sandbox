import '../tokens.css';
import '../alert.css';

const titleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt tincidunt nunc,';
const bodyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt tincidunt nunc, ac facilisis risus. Nunc rutrum eros sed arcu felis, viverra dapibus eu suscipit.';

const statusMeta = {
  info: { label: 'Information', icon: 'i' },
  success: { label: 'Success', icon: 'check' },
  warning: { label: 'Warning', icon: 'warn' },
  error: { label: 'Error', icon: 'error' },
};

function renderStatusIcon(status) {
  if (status === 'success') {
    return '<path d="M6 12.2l3.2 3.2L18 6.7" stroke="var(--color-success-icon)" stroke-width="2" fill="none" stroke-linecap="round"/>';
  }

  if (status === 'warning') {
    return '<path d="M12 4.5l7.2 12.5H4.8L12 4.5z" fill="var(--color-warning-icon)"/><path d="M12 9v4.3M12 15.8h.01" stroke="white" stroke-width="1.8" stroke-linecap="round"/>';
  }

  if (status === 'error') {
    return '<circle cx="12" cy="12" r="8" fill="var(--color-error-icon)"/><path d="M9.2 9.2l5.6 5.6M14.8 9.2l-5.6 5.6" stroke="white" stroke-width="1.8" stroke-linecap="round"/>';
  }

  return '<circle cx="12" cy="12" r="8" fill="var(--color-info-icon)"/><path d="M12 10.2v4.2M12 8h.01" stroke="white" stroke-width="1.8" stroke-linecap="round"/>';
}

function renderAlert({ status, size, shadow = false }) {
  const { label } = statusMeta[status];

  return `
    <section class="al al--${size} al--${status} ${shadow ? 'al--shadow' : ''}" role="${
      status === 'error' || status === 'warning' ? 'alert' : 'status'
    }" aria-live="${status === 'error' || status === 'warning' ? 'assertive' : 'polite'}" aria-label="${label} message">
      <div class="al__icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">${renderStatusIcon(status)}</svg>
      </div>

      <div class="al__text">
        <h3 class="al__title">${titleText}</h3>
        <p class="al__body">${bodyText}</p>
        <div class="al__footer" aria-label="Alert actions">
          <button type="button" class="al-btn al-btn--tertiary-alt al-btn--${size}">Reject</button>
          <button type="button" class="al-btn al-btn--primary al-btn--${size}">Accept</button>
        </div>
      </div>

      <button type="button" class="al__close" aria-label="Dismiss alert">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <span class="sr-only">${label} notification</span>
    </section>
  `;
}

function renderMatrix(size, shadow) {
  return ['info', 'success', 'warning', 'error']
    .map((status) => renderAlert({ status, size, shadow }))
    .join('');
}

export default {
  title: 'Playground/Alert',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Basic = () => `
  <div class="al-story-shell">
    <div class="al-story-grid">
      <div class="al-story-col">${renderMatrix('lg', false)}${renderMatrix('md', false)}${renderMatrix('sm', false)}</div>
      <div class="al-story-col">${renderMatrix('lg', true)}${renderMatrix('md', true)}${renderMatrix('sm', true)}</div>
    </div>
  </div>
`;
