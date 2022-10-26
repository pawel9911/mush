import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadcrumbPage = ({category, name}) =>{
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Strona Główna</Breadcrumb.Item>
      <Breadcrumb.Item href="/category">{category}</Breadcrumb.Item>
      <Breadcrumb.Item active>{name}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbPage;