import { Text } from 'pages/atoms';

export const Header =  () => {

  return (
    <header className="wrapper">
      <div className="inner">
        <Text colour="dark" type="heading" size="xl" level={1} center={true}>FIFA 20 Team Generator</Text>
      </div>
    </header>
  );
}
