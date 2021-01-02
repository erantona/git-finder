import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getRepos(this.props.match.params.login);
    console.log(this.props);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      login,
      avatar_url,
      html_url,
      company,
      location,
      hireable,
      twitter_username,
      blog,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
    } = this.props.user;
    const { loading } = this.props;
    const { repos } = this.props;

    if (loading) {
      return <Spinner repos={repos} />;
    }

    return (
      <Fragment>
        <div className="grid md:grid-cols-2 bg-white mt-3 rounded-lg pb-3">
          <div className="flex flex-col space-y-3 text-black">
            <Link to="/">
              <button
                type="button"
                className="h-12 mt-3 ml-3 px-3 rounded-md bg-blue-200 transform duration-100 ease-in-out hover:bg-blue-300 hover:text-gray-800 hover:scale-95 font-semibold"
              >
                Back to Search..
              </button>
            </Link>

            <img
              src={avatar_url}
              className="rounded-full mx-auto border-blue-200 border-8 hover:border-blue-400 cursor-pointer"
              style={{ width: '200px' }}
            />
            <p className="mx-auto text-2xl font-bold px-2 py-2 rounded-md">
              {name}
            </p>

            <p className="mx-auto text-lg">
              <span className="font-bold">Hireable: </span>
              {hireable ? (
                <i className="fas fa-check text-green-600"></i>
              ) : (
                <i className="fas fa-times text-red-500"></i>
              )}
            </p>

            {location ? (
              <p className="mx-auto text-lg font-bold px-2 py-2 rounded-md">
                location: {location}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="p-4 flex flex-col space-y-6 text-black max-w-lg mx-auto">
            {bio ? (
              <p className="max-w-md">
                <span className="font-bold text-blue-800">Bio:</span>
                <br />
                {bio}
              </p>
            ) : (
              ''
            )}
            <div className=" flex flex-col md:flex-row">
              <a href={html_url}>
                <button
                  type="button"
                  className="outline-none h-12 mt-3 ml-3 px-3 rounded-md bg-blue-200 transform duration-100 ease-in-out hover:bg-blue-300 hover:text-gray-800 hover:scale-95 font-semibold"
                >
                  Visit Github Profile
                </button>
              </a>

              {twitter_username ? (
                <a href={twitter_username}>
                  <button
                    type="button"
                    className="outline-none h-12 mt-3 ml-3 px-3 rounded-md bg-blue-600 text-white transform duration-100 ease-in-out hover:bg-blue-700 hover:text-gray-100 hover:scale-95 font-semibold"
                  >
                    Visit Twitter Profile
                  </button>
                </a>
              ) : (
                ''
              )}
            </div>
            {login ? (
              <p className="border-b-4 mx-auto">
                <span className="font-bold text-blue-800">UserName: </span>
                {login}
              </p>
            ) : (
              ''
            )}
            {company ? (
              <p className="border-b-4 mx-auto">
                <span className="font-bold text-blue-800">Company: </span>
                {company}
              </p>
            ) : (
              ''
            )}
            {blog ? (
              <p className="border-b-4 mx-auto">
                <span className="font-bold text-blue-800">Blog: </span>
                <a href={blog} target="_blank">
                  {blog}
                </a>
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="text-black grid sm:grid-cols-2 md:grid-cols-4 md:col-span-2 mx-auto p-4 ">
            <p className="bg-green-200 px-4 py-2 rounded-md my-4 mx-3">
              <span className="font-bold">Followers: </span>
              {followers}
            </p>
            <p className="bg-blue-200 px-4 py-2 rounded-md my-4 mx-3">
              <span className="font-bold">Following: </span>
              {following}
            </p>
            <p className="bg-red-200 px-4 py-2 rounded-md my-4 mx-3">
              <span className="font-bold">Public Repos: </span>
              {public_repos}
            </p>
            <p className="bg-pink-200 px-4 py-2 rounded-md my-4 mx-3">
              <span className="font-bold">Public Gists: </span>
              {public_gists}
            </p>
          </div>
        </div>
        <div className="mt-3 bg-white rounded-lg text-black">
          <p className="text-3xl md:text-4xl p-6 font-semibold">
            Recent public repos
          </p>
          {repos ? <Repos repos={repos} /> : <Spinner />}
        </div>
      </Fragment>
    );
  }
}

export default User;
