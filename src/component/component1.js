import { useState } from 'react';
import "./component1.css";
function WordCounter() {

    const[state,setState] = useState({
        wordCount: 0,
        charCount: 0
    })
    const handleKeyPress = (e)=>{
        const count = e.target.value;

        const countWords = (count)=>{
            if(count.length === 0)
                return 0;
            else{
                count = count.replace(/(^\s*)|(\s*$)/gi,"");
                count = count.replace(/[ ]{2,}/gi," ");
                count = count.replace(/\n /,"\n");
                return count.split(' ').length; 
            }
        }
        setState({
            wordCount: countWords(count),
            charCount: count.length
        });
    }
    return (
        <div class="container col-md-8 col-sm-6 col-4 col-lg-12 bg-primary-subtle">
            <h1 class="heading">Responsive Paragraph Word Counter</h1>
            <textarea placeholder="Type Here" onChange={handleKeyPress}></textarea>
            <h1>Word Count: </h1>
                <p className='num'>{state.wordCount}</p>
            <h1>Character Count: </h1>
            <p className='num'>{state.charCount}</p>
        </div>
    );
}

export default WordCounter;