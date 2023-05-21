import React from "react";

const Blog = () => {
  return (
    <div className="mt-5">
      <div>
        <h3 className="text-xl font-bold mb-3">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h3>
        <p>
          An access token and a refresh token are commonly used in
          authentication and authorization mechanisms, such as OAuth 2.0, to
          secure and manage access to protected resources on behalf of a user.
        </p>

        <h3>Access Token:</h3>
        <p>
          An access token is a credential that represents the authorization
          granted to a client application to access specific resources. It is
          typically issued by an authentication server (e.g., an identity
          provider) after a successful authentication process. The access token
          contains information about the client and the user (if applicable) and
          has a limited lifespan or expiration time. The client includes the
          access token in each request to the server to prove its authorization
          to access protected resources.
        </p>

        <h3>Refresh Token:</h3>
        <p>
          A refresh token is also issued by the authentication server during the
          initial authentication process. Unlike an access token, a refresh
          token is long-lived and can be used to obtain a new access token when
          the current one expires. It acts as a secure key to request a new
          access token without having the user re-authenticate. The refresh
          token is typically stored securely on the client-side and should not
          be accessible to unauthorized parties.
        </p>

        <p>
          When the clients access token expires, it can use the refresh token to
          request a new access token from the authentication server. This
          process is often called a token refresh or token refresh flow. The
          client sends the refresh token to the server, and if its valid and not
          expired, the server responds with a new access token. This allows the
          client to continue accessing protected resources without requiring the
          user to re-enter their credentials. Regarding storage on the
          client-side, security is crucial. Access tokens and refresh tokens
          should be stored securely to prevent unauthorized access. Common
          practices include:
        </p>

        <h3>Cookies: </h3>
        <p>
          Storing tokens in HTTP-only cookies can help protect against
          cross-site scripting (XSS) attacks. Cookies should have the secure
          flag set to ensure they are only transmitted over HTTPS.
        </p>

        <h3>Local Storage:</h3>
        <p>
          {" "}
          Storing tokens in the browsers local storage provides easy access but
          is vulnerable to XSS attacks. Its generally not recommended unless
          additional security measures, such as encryption, are implemented.
        </p>

        <h3 className="text-xl font-bold mb-3">Compare SQL and NoSQL databases?</h3>
        <p>
          Data Model: SQL: SQL databases follow a rigid, predefined schema where
          data is organized into tables with fixed columns and relationships
          between tables (relational model). They enforce data integrity through
          primary keys, foreign keys, and referential integrity. NoSQL: NoSQL
          databases have a flexible schema or schema-less design. They can
          handle unstructured, semi-structured, or polymorphic data models.
          NoSQL databases include key-value stores, document stores,
          column-family stores, and graph databases.
        </p>

        <h3 className="text-xl font-bold mb-3">What is express js? What is Nest JS ?</h3>
        <p>
          Express.js is a minimalistic and flexible web application framework
          for Node.js, which is a server-side JavaScript runtime environment.
          Express.js provides a simple and intuitive way to build web
          applications and APIs. It offers a range of features for handling HTTP
          requests and responses, routing, middleware integration, and template
          engines.
        </p>

        <h3 className="text-xl font-bold mb-3">What is MongoDB aggregate and how does it work?</h3>
        <p>MongoDBs aggregation framework is a powerful tool for processing and analyzing data within MongoDB collections. It provides a way to perform complex data manipulations, transformations, and calculations on large volumes of data efficiently. The aggregation framework works by using a pipeline model, where documents are passed through a sequence of stages to produce the desired results. Each stage in the pipeline performs a specific operation on the input documents and passes the modified output to the next stage.</p>
      </div>
    </div>
  );
};

export default Blog;
