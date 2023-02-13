export const Error = (props) => {
  return (
    <div>
      <h3>ERROR</h3>
      <p>Error {props.error.statusCode}</p>
    </div>
  );
}
