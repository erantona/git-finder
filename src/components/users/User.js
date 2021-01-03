import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, getUser, loading, getRepos, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

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
  } = user;

  if (loading) {
    return <Spinner repos={repos} />;
  }

  return (
    <Fragment>
      <div className="grid md:grid-cols-2 bg-white dark:bg-gray-800 dark:text-blue-200 mt-3 rounded-lg pb-3">
        <div className="flex flex-col space-y-3 text-black dark:text-blue-200">
          <Link to="/">
            <button
              type="button"
              className="h-12 mt-3 ml-3 px-3 rounded-md bg-blue-200 dark:text-blue-800 transform duration-100 ease-in-out hover:bg-blue-300 hover:text-gray-800 hover:scale-95 font-semibold"
            >
              Back to Search..
            </button>
          </Link>

          <img
            src={avatar_url}
            alt=""
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
        <div className="p-4 flex flex-col space-y-6 text-black dark:text-blue-200 max-w-lg mx-auto">
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
                className="outline-none h-12 mt-3 ml-3 px-3 rounded-md bg-blue-200 dark:text-blue-800 transform duration-100 ease-in-out hover:bg-blue-300 hover:text-gray-800 hover:scale-95 font-semibold"
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
              <a href={blog} target="_blank" rel="noreferrer">
                {blog}
              </a>
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="text-black bg-white dark:bg-gray-800 mt-3 rounded-lg grid sm:grid-cols-2 md:grid-cols-4 col-span-2 mx-auto p-4 lg:px-40">
        <p className="bg-green-200 px-4 py-2 rounded-md my-4 mx-3">
          <span className="font-bold">Followers: </span>
          {followers}
        </p>
        <p className="bg-pink-200 px-4 py-2 rounded-md my-4 mx-3">
          <span className="font-bold">Following: </span>
          {following}
        </p>
        <p className="bg-yellow-200 px-4 py-2 rounded-md my-4 mx-3">
          <span className="font-bold">Public Repos: </span>
          {public_repos}
        </p>
        <p className="bg-red-200 px-4 py-2 rounded-md my-4 mx-3">
          <span className="font-bold">Public Gists: </span>
          {public_gists}
        </p>
      </div>
      <div className="mt-8 bg-white dark:bg-gray-800 dark:text-blue-200 rounded-lg text-black">
        <p className="text-3xl md:text-4xl p-6 font-semibold">
          Recent public repos
        </p>
        {repos ? <Repos repos={repos} /> : <Spinner />}
      </div>
    </Fragment>
  );
};

export default User;
