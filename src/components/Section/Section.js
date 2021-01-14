import s from './Section.module.css';

export default function Section(props) {
  return (
    <div className={s.section}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
