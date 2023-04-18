import Button 'react-bootstrap/Button';
const HelloWorldExample1 = () => {
    const [{ count, increase }, { loading, error }] =
      useComponent("hello-world-1");
  
    return (
      <>
        {error && <Alert severity="error">{error.message}</Alert>}
        <Button onClick={() => increase()} />
      </>
    );
  };