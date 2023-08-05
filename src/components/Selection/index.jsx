import { images } from "../../utils/img.utils";

const Selection = () => {

    const {triangle, rock, paper, scissors} = images;

    return (
        <section>
            <img src={triangle} />
            <img src={rock} />
            <img src={paper} />
            <img src={scissors} />
        </section>
    );
}

export default Selection;
