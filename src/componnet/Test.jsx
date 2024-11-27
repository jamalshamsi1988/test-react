import Card from "./Card";

function Test() {
  //   const isLogedin = true;
  const courses = [
    { id: 1, name: "HTML",number:1 },
    { id: 2, name: "CSS",number:2 },
    { id: 3, name: "Bootstrap",number:3 },
    { id: 4, name: "React",number:4},
    { id: 5, name: "Javascript",number:5 },
  ];
  return (
    <>
      <ul>
        {courses.map((coures) => (
         <Card key={coures.id} data={coures} />
        ))}
      </ul>
    </>
  );
}

export default Test;
