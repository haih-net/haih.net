import {
  FieldHintStyled,
  FieldInputStyled,
  FieldLabelStyled,
  FieldSelectStyled,
  FieldStyled,
  FieldTextareaStyled,
} from './styles'

type BaseProps = {
  label: string
  name: string
  placeholder?: string
  hint?: string
}

export function TextField({ label, name, placeholder, hint }: BaseProps) {
  return (
    <FieldStyled>
      <FieldLabelStyled>{label}</FieldLabelStyled>
      <FieldInputStyled name={name} placeholder={placeholder ?? ''} />
      {hint ? <FieldHintStyled>{hint}</FieldHintStyled> : null}
    </FieldStyled>
  )
}

export function TextAreaField({ label, name, placeholder, hint }: BaseProps) {
  return (
    <FieldStyled>
      <FieldLabelStyled>{label}</FieldLabelStyled>
      <FieldTextareaStyled name={name} placeholder={placeholder ?? ''} />
      {hint ? <FieldHintStyled>{hint}</FieldHintStyled> : null}
    </FieldStyled>
  )
}

export function SelectField({
  label,
  name,
  options,
  hint,
}: {
  label: string
  name: string
  options: string[]
  hint?: string
}) {
  return (
    <FieldStyled>
      <FieldLabelStyled>{label}</FieldLabelStyled>
      <FieldSelectStyled name={name} defaultValue={options[0]}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FieldSelectStyled>
      {hint ? <FieldHintStyled>{hint}</FieldHintStyled> : null}
    </FieldStyled>
  )
}
