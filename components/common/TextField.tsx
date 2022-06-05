import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, useMemo, useState } from 'react';
import { RegisterOptions, useController } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';

import styles from './TextField.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
  numeric?: boolean;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
}

export const numericRegex = /[^0-9-+]/g;

const TextField = ({
  className,
  label,
  name,
  required,
  textarea,
  type = "text",
  rules,
  numeric,
  ...rest
}: Props) => {
  const InputElement = useMemo(() => {
    return (textarea ? TextareaAutosize : "input") as any;
  }, []);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    rules: { ...rules, required },
    defaultValue: "",
  });

  const [isFocus, setFocus] = useState(false);
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
    field.onBlur();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!numeric) {
      field.onChange(e);
    } else {
      const { value } = e.target;
      if (value.match(numericRegex)) {
        field.onChange(+value.replace(numericRegex, ""));
      } else {
        field.onChange(value);
      }
    }
  };

  return (
    <>
      <div
        className={classNames(
          styles["form-group"],
          { [styles["error"]]: error },
          className
        )}
      >
        <label htmlFor="">
          {label}
          {required ? "*" : ""}
        </label>
        <div
          className={classNames(styles["form-wrapper"], {
            [styles["textarea"]]: textarea,
            [styles["is-focus"]]: isFocus,
          })}
        >
          <InputElement
            ref={field.ref}
            className={styles["text-field"]}
            type={type}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete="off"
            value={field.value}
            onChange={onChange}
            minRows={1}
            maxRows={5}
            {...rest}
          />
        </div>
      </div>
    </>
  );
};

export default TextField;
