import "./Titles.css"


export function MainTitle({dayText, day, month}) {
  return (
    <h1 className="main-title">{dayText} <span className="span-day">{day}</span> de {month}</h1>
  );
}

export function ToggleText({text}) {
 return (
  <h2 className="toggleText">{text}</h2>
 );
}

