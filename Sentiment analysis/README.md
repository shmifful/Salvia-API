<details>
    <summary><b><u>Table of Contents (Click to expand)</u></b></summary>

  - [How to use](#how-to-use)
  - [Model structure](#model-structure)
  - [Use cases](#use-cases)
</details>

# How to use 
## Sentiment analysis endpoint
```
https://api.salvia.dev/sentiment/
```

## Input
`string`

## Output
```python
dict : {
    "sentiment": "positive" | "neutral" | "negative",
    "confidence": float # range between 0 and 1
}
```

## Raises 
`400`: No input text provided. 

`503`: Model is not loaded and ready.

## Usage
You can try this endpoint yourself (and many more) at [api.salvia.dev/docs](api.salvia.dev/docs).
### `python`
```py
import requests

URL = "https://api.salvia.dev/sentiment/" 
s = "I love pizza" 
res = requests.get(URL + s)

print(res.text)
# Output: {"sentiment":"positive","confidence":0.96}
```
`NOTE`: the API returns a strings, you may want to convert is to `dict`.

# Model structure
This model uses a `Linear Support Vector Machine (LinearSVC)`. Rather than just counting the words, the model uses a hybrid approach to try understand the context of the string.

## `TF-IDF Vectorization`
The model uses a hybrid approach to get different perspectives:
- Word-level ngrams (1-2): This captures the relationship between words, e.g. "not" and "good" put together change their meaning.
- Character-level ngrams (1-2): This looks at character patterns, making it more useful for casual typers, such that the model can still be effective against typos, slangs, and weird punctiation you find on Reddit posts or on YouTube comments.

## `LinearSVC`
`LinearSVC` is a high performance classifier that is able to handle high dimensional text data. In the training data, there was an imbalance in the quantity of each labels, so to counteract this, `class_weight` was set to `balanced`.

## Pros
* Easy to build
* Fast implementation
* High accuracy 

## Cons
* Requires a lot of labelled data
* Always requires new ingestions of data to keep it up to data (e.g., to teach the model slangs)
* Does not know how to handle new words
* Struggles to handle nuances like sarcasm 

# Use cases
This API is used to analyse various text and understand the sentiment behind the string. Where would this be useful? 

Let's say you have a product that sells thousands of units a week. For every 10 people the product, 1 person leaves a review. However, there are so many reviews that it is not feasible to read all of them.

So, what do you do? Each time someone leaves a review, you can run this API, analyse their review, and determine whether the review was positive, neutral, or negative. You can then aggregate the sentiments, to get a general sense of how positively or negatively people feel about your product.

Here is a list of text that this API could analyse:
- Amazon product reviews
- YouTube comments
- Reddit posts/comments
- Instagram comments
- Google Maps reviews
- etc...