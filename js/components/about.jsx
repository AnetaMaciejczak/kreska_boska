import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="about_container container-grid">
                        <div className="col-6 about_holder_text">
                            <div className="about_text">
                                <p>Cześć!</p>
                                <p className= "about_text_p">Tu Katarzyna i lubię rysować.</p>

                                <p className= "about_text_p"> Wiem, że masz do niej słabość. Ona czuje to samo.
                                    Ona uwielbia Cię bardziej niż uwielbia czekoladę!</p>

                                <p className="about_text_p">  Uważa, że ​​jesteś fantastyczna, aż do szpiku kości – bo jesteś! <br/>
                                    <strong>Ta kobieta, ta boska istota</strong> – całkowicie łapie za serce. Nie zmusza, nie trzyma zbyt
                                    mocno ani nie miażdży Twoich trzepoczących skrzydeł. Pozwala Ci być. Pozwala wstać i
                                    upaść na swój sposób.</p>
                                <p className="about_text_p"> Ta kobieta, ta magiczna kobieta – łagodzi ból poprzez uśmiech. A wystarczy jej do tego
                                    kilka krzywych kresek na papierze. Jej obraz jest uzdrawiający i wciągający jak…
                                    narkotyk.</p>
                                <p className="about_text_p">Wystarczy ją tylko znaleźć. W sobie lub tuż obok. </p>

                                <p className="about_text_p"> Uczcij tę uroczą damę w swoim życiu – spraw, aby poczuła się jak bogini. Bo chociaż ona wie, że jest boginią – zapomniała. Jest smutna i przestraszona – i tonie
                                    w morzu nigdy nie kończących się list zadań i czarnych obłoków niepewności. </p>

                                <p className="about_text_p_s"> Uprzejmie przypominam o jej pięknej duszy i świętym ogniu, który w niej płonie! </p>

                                <hr/>
                                <p className="about_text_p_d">And God said, “it is good, she and I will dance.”</p>

                            </div>
                        </div>
                        <div className="col-6 about_holder_img">
                            <img className="about_img" src="./img/about.png" alt=""/>
                            <img id="about_sign" src="./img/sign.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export {About}