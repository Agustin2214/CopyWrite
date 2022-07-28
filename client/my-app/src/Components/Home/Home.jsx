import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postIecho } from "../../Redux/actions/actions";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import style from "./Home.module.css";

export function Home() {
  const dispatch = useDispatch();
  const textAcc2 = useSelector((state) => state.textAcc);
  const [text, setText] = useState("");
  


  function handleChange(e) {
    setText(e.target.value);
  }

  async function handleSumbit(e) {
    e.preventDefault();

    dispatch(postIecho(text));
  }

  return (
    <div>
      <nav className={style.NavRed}>
        <Form>
          <Row>
            <Col className="text-center" lg={4} md={4} sm={4} xs={2}></Col>
            <Col className="text-center" lg={5} md={5} sm={5} xs={8}>
              <Form.Control
                autoComplete="off"
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Insert Text"
              />
            </Col>
            <Col className="text-center" lg={2} md={2} sm={2} xs={2}>
              <Button type="sumbit" onClick={(e) => handleSumbit(e)}>
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </nav>

      <br />

      <Container>
        <Row>
          <Col className="text-center" lg={2} md={2} sm={2} xs={2}>
            <h1>Result:</h1>
          </Col>
          <Col className="text-center" lg={10} md={10} sm={10} xs={10}>
            {textAcc2?.map((e) =>
              e.palindromo === "YES" ? (
                <Row>
                  <Col className="text-center" lg={10} md={10} sm={10} xs={10}>
                    <Form.Control
                      value={e.response}
                      type="text"
                      name="name"
                      disabled
                    />
                  </Col>
                  <Col className="text-center" lg={2} md={2} sm={2} xs={2}>
                    <Button disabled>Palindromo</Button>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col className="text-center" lg={10} md={10} sm={10} xs={10}>
                    <Form.Control
                      value={e.response}
                      type="text"
                      name="name"
                      disabled
                    />
                  </Col>
                  <Col
                    className="text-center"
                    lg={2}
                    md={2}
                    sm={2}
                    xs={2}
                  ></Col>
                </Row>
              )
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
