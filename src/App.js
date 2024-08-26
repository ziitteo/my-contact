import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  // 1. 왼쪽에는 연락처 등록하는 폼이 있고 오른쪽에는 연락처 리스트와 search창이 있다
  // 2. 리스트에는 유저 이름과 전화번호를 추가할 수 있다
  // 3. 리스트에 아이템이 몇개있는지 보인다
  // 4. 사용자가 유저를 이름검색으로 찾을 수 있다
  return (
    <div className='main-container'>
      <h1 className='title'>My Contact</h1>
      <Container className='contact-container'>
        <Row>
          <Col lg={4}>
            <ContactForm />
          </Col>

          <Col lg={8}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
