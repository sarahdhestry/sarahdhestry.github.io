import { Card } from "antd";
import { Fragment } from "react";
import "./Home.css"

const { Meta } = Card;

function Home() {
    return ( 
        <Fragment>
            <div className="homeWrapper">
                <div className="header">
                   <h1>Ini Judul</h1>
                </div>
                <div className="content">
                    <Card
                        hoverable
                        style={{
                        width: 240,
                        }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </div>
            </div>
        </Fragment>
     );
}

export default Home;