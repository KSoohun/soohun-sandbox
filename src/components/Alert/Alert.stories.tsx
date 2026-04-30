import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import '../../tokens.css';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Alert status/variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Alert size',
    },
    shadow: {
      control: 'boolean',
      description: 'Show shadow',
    },
    close: {
      control: 'boolean',
      description: 'Show close button',
    },
    bulletedList: {
      control: 'boolean',
      description: 'Show bulleted list instead of body text',
    },
    primaryCta: {
      control: 'boolean',
      description: 'Show primary CTA button',
    },
    secondaryCta: {
      control: 'boolean',
      description: 'Show secondary CTA button',
    },
    title: {
      control: 'text',
      description: 'Title text',
    },
    bodyText: {
      control: 'text',
      description: 'Body text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

const titleText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt tincidunt nunc,';
const bodyText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt tincidunt nunc, ac facilisis risus. Nunc rutrum eros sed arcu felis, viverra dapibus eu suscipit.';

export const Info: Story = {
  args: {
    status: 'info',
    size: 'lg',
    title: titleText,
    bodyText: bodyText,
    shadow: true,
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    size: 'lg',
    title: titleText,
    bodyText: bodyText,
    shadow: true,
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    size: 'lg',
    title: titleText,
    bodyText: bodyText,
    shadow: true,
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    size: 'lg',
    title: titleText,
    bodyText: bodyText,
    shadow: true,
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const Small: Story = {
  args: {
    status: 'info',
    size: 'sm',
    title: titleText,
    bodyText: bodyText,
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const Medium: Story = {
  args: {
    status: 'info',
    size: 'md',
    title: titleText,
    bodyText: bodyText,
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const Large: Story = {
  args: {
    status: 'info',
    size: 'lg',
    title: titleText,
    bodyText: bodyText,
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const WithBulletedList: Story = {
  args: {
    status: 'info',
    size: 'lg',
    title: titleText,
    bulletedList: true,
    listItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Mauris tincidunt tincidunt nunc, ac facilisis risus',
      'Nunc rutrum eros sed arcu felis',
    ],
    close: true,
    primaryCta: true,
    secondaryCta: true,
  },
};

export const WithoutActions: Story = {
  args: {
    status: 'info',
    size: 'lg',
    title: titleText,
    bodyText: bodyText,
    close: true,
    primaryCta: false,
    secondaryCta: false,
  },
};

export const WithShadow: Story = {
  args: {
    status: 'info',
    size: 'lg',
    title: titleText,
    bodyText: bodyText,
    shadow: true,
    close: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Alert
        status="info"
        size="lg"
        title={titleText}
        bodyText={bodyText}
        shadow
        close
        primaryCta
        secondaryCta
      />
      <Alert
        status="success"
        size="lg"
        title={titleText}
        bodyText={bodyText}
        shadow
        close
        primaryCta
        secondaryCta
      />
      <Alert
        status="warning"
        size="lg"
        title={titleText}
        bodyText={bodyText}
        shadow
        close
        primaryCta
        secondaryCta
      />
      <Alert
        status="error"
        size="lg"
        title={titleText}
        bodyText={bodyText}
        shadow
        close
        primaryCta
        secondaryCta
      />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Alert
        status="info"
        size="sm"
        title={titleText}
        bodyText={bodyText}
        close
        primaryCta
        secondaryCta
      />
      <Alert
        status="info"
        size="md"
        title={titleText}
        bodyText={bodyText}
        close
        primaryCta
        secondaryCta
      />
      <Alert
        status="info"
        size="lg"
        title={titleText}
        bodyText={bodyText}
        close
        primaryCta
        secondaryCta
      />
    </div>
  ),
};
