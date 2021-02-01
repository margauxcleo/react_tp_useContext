const withStyling = (BaseComponent, css) => {
    return (props) => {
      return <BaseComponent {...props} style={css} />;
    };
  };
  export default withStyling;