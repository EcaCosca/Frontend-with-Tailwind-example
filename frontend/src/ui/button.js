const classes = {
  primary: `p-1 pl-3 pr-3 mr-2 transition-colors border-2 border-indigo-500 duration-700 transform bg-indigo-500 text-gray-100 text-m rounded-lg focus:border-4 border-indigo-300`,
  secondary: `p-1 pl-3 pr-3 bg-transparent border-2 border-indigo-500 text-indigo-500 text-m rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300`,
};
export function Button({ children, className, onClick }) {
  return (
    <button className={classes[className]} onClick={onClick}>
      {children}
    </button>
  );
}
