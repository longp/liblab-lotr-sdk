# Intro
The LOTR API SDK serves as a layer of abstraction for the LOTR API available at [here](https://the-one-api.dev/).
It offers a few ready-to-use library functions that enable users to interact with the LOTR API in a user-friendly manner.

# ApiClient
The ApiClient makes network fetch calls to the LOTR API endpoints and is shared across service classes to reduce code repetition.

# Services
The RootService class serves as the base class for all services because it provides a consistent way of retrieving resources.
Since all resources have methods for retrieving a list of resources (getAll) and a single resource (getById), these methods are included in the RootService class.
Additionally, the other Service classes use methods from the RootService to construct the query string for endpoints, enabling sorting, pagination, or filtering.


# Future goals and nice to haves
Having a way to cache certain resources when a user tries to retrieve that particular data would help in that aspect, given the conservative rate limit for the LOTR API.
