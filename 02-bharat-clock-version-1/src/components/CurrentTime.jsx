let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      This is the current time :{time.toLocaleDateString()} -{" "}
      {time.toTimeString()}
    </p>
  );
};
export default CurrentTime;
