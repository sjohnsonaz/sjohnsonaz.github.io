const year = new Date().getFullYear();
const company = "Sean Johnson";
const copyright = `${company} ${year}`;

export const Copyright = () => {
  return <>&copy; {copyright}</>;
};
