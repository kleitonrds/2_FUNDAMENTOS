const Challenge = () => {

    const num1 = 10;
    const num2 = 20;    
    const handleChallenge = () => {
        console.log(num1 + num2);

    }
        
    
    

    return (
        <div>
            <p>{num1}</p>
            <p>{num2}</p>
            <button onClick={handleChallenge}>
                Some aqui!
            </button>
        </div>
    )

};

export default Challenge