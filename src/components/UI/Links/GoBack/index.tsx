/**
 * Allow to go to the previous URL depends on the history
 *
 * @returns
 */
const GoBack = () => {
  return (
    <button className="go-back-button" onClick={() => history.back()}>
      Go back
    </button>
  );
};

export default GoBack;
