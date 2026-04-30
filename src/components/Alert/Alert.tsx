import React from 'react';
import './Alert.css';

export type AlertStatus = 'info' | 'success' | 'warning' | 'error';
export type AlertSize = 'sm' | 'md' | 'lg';

export interface AlertProps {
  /** Alert status/variant */
  status?: AlertStatus;
  /** Alert size */
  size?: AlertSize;
  /** Title text */
  title?: string;
  /** Body text */
  bodyText?: string;
  /** Show shadow */
  shadow?: boolean;
  /** Show close button */
  close?: boolean;
  /** Show bulleted list */
  bulletedList?: boolean;
  /** Bulleted list items */
  listItems?: string[];
  /** Show primary CTA button */
  primaryCta?: boolean;
  /** Primary CTA text */
  primaryCtaText?: string;
  /** Primary CTA click handler */
  onPrimaryClick?: () => void;
  /** Show secondary CTA button */
  secondaryCta?: boolean;
  /** Secondary CTA text */
  secondaryCtaText?: string;
  /** Secondary CTA click handler */
  onSecondaryClick?: () => void;
  /** Close button click handler */
  onClose?: () => void;
  /** Additional CSS class */
  className?: string;
}

const AlertIcon: React.FC<{ status: AlertStatus }> = ({ status }) => {
  switch (status) {
    case 'success':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 12.2l3.2 3.2L18 6.7"
            stroke="var(--color-success-icon)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'warning':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 4.5l7.2 12.5H4.8L12 4.5z" fill="var(--color-warning-icon)" />
          <path
            d="M12 9v4.3M12 15.8h.01"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'error':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" fill="var(--color-error-icon)" />
          <path
            d="M9.2 9.2l5.6 5.6M14.8 9.2l-5.6 5.6"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    default: // info
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" fill="var(--color-info-icon)" />
          <path
            d="M12 10.2v4.2M12 8h.01"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

export const Alert: React.FC<AlertProps> = ({
  status = 'info',
  size = 'lg',
  title,
  bodyText,
  shadow = false,
  close = true,
  bulletedList = false,
  listItems = [],
  primaryCta = false,
  primaryCtaText = 'Accept',
  onPrimaryClick,
  secondaryCta = false,
  secondaryCtaText = 'Reject',
  onSecondaryClick,
  onClose,
  className = '',
}) => {
  const statusLabels = {
    info: 'Information',
    success: 'Success',
    warning: 'Warning',
    error: 'Error',
  };

  const classNames = [
    'al',
    `al--${size}`,
    `al--${status}`,
    shadow && 'al--shadow',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={classNames}
      role={status === 'error' || status === 'warning' ? 'alert' : 'status'}
      aria-live={status === 'error' || status === 'warning' ? 'assertive' : 'polite'}
      aria-label={`${statusLabels[status]} message`}
    >
      <div className="al__icon" aria-hidden="true">
        <AlertIcon status={status} />
      </div>

      <div className="al__text">
        {title && <h3 className="al__title">{title}</h3>}
        {bodyText && <p className="al__body">{bodyText}</p>}
        {bulletedList && listItems.length > 0 && (
          <ul className="al__list">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="al__footer" aria-label="Alert actions">
            {secondaryCta && (
              <button
                type="button"
                className={`al-btn al-btn--tertiary-alt al-btn--${size}`}
                onClick={onSecondaryClick}
              >
                {secondaryCtaText}
              </button>
            )}
            {primaryCta && (
              <button
                type="button"
                className={`al-btn al-btn--primary al-btn--${size}`}
                onClick={onPrimaryClick}
              >
                {primaryCtaText}
              </button>
            )}
          </div>
        )}
      </div>

      {close && (
        <button
          type="button"
          className="al__close"
          aria-label="Dismiss alert"
          onClick={onClose}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}

      <span className="sr-only">{statusLabels[status]} notification</span>
    </section>
  );
};

export default Alert;
