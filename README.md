<ins>__NATURAL LANGUAGE PROCESSING BASICS__</ins>
 *   **Tokenization**: This  is splitting a string into meaning units.


 *   **Stemming**: a natural language processing technique that lowers inflection in words to their root forms, 
hence aiding in the preprocessing of text, words, and documents for text normalization.


 *   **Bag of Words**: a natural language processing (NLP) strategy for converting a text document into numbers that can be used by a computer program. 
BoW is often implemented as a Python dictionary.


<INS>**THE NLP PREPROCESSING PIPELINE FOR THE TRAINING OF THE MODEL**</INS>
                    
**Sentence**: Are you eating or sleeping?
- Tokenize: `["Are", "you", "eating", "or", "sleeping", "?"]`
- Lower + stem: `["are", "you", "eat", "or", "sleep", "?"]`
- Exclude punctuations: `["are", "you", "eat", "or", "sleep"]`
- Bag of words: `X – features: [0, 1, 1, 0, 0]`


<INS>**PREREQUISITES**</INS>
* PyTorch: `pip install torch`
* NLTK: `pip install nltk`
* Numpy: `pip install numpy`
* Flask: `pip install flask`
* Python
* HTML
* CSS
* Javascript
* Basic knowledge of PyTorch. Recommend this beginner course 
Click [PyTorch beginner](https://www.youtube.com/watch?v=V_xro1bcAuA&pp=ygUXcHl0b3JjaCBiZWdpbm5lciBjb3Vyc2U%3D) to visit the youtube page.






