export interface ButtonProps {
    title: string;
    kind?: string;
    onClick?: any;
    type: 'button' | 'reset' | 'submit';
    action?: any;
}

export interface InputProps {
    type : string; 
    placeholder: string;
    pattern?: string;
    required?: any;
    onBlur: any;
    name: string;
    id: string;
    onChange?: any;
    value: string;
}

export interface SelectProps {
    placeholder: string;
    required: any; 
    options: any;
    onChange?: any;
    onBlur?: any;
    id: string;
    name: string;
    value?: string;
}

export interface ServerResponseModalProps {
    closeModal?: () => void;
}