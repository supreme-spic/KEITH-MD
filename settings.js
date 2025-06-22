/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61VaW+rOBT9L/6adMIOiVRp2EMTSAKhWUajkQGzJGw1JgtP/e8jklat9LaONHyyzPW55957fPwNlFXWoBm6gsk3UOPsBAnql+RaIzABShvHCIMhiCCBYAIEpWK4cyxLApfaFT4LNVIbt1vRBqeHwcGBSBdXamqtp+dH8DoEdRvkWfgLwBdtubQ9km5O40rRV95xvzmuLdNbGLlUF4fttN7VlLQtTFp+BK89IsxwViZ6naICYZjP0HUJM/w1+q18qKNnFs3ithio2+2eGN01RalVRX7FDo762M55nvYqU/4a/dH02SDTfDtwu9OmMcwN8VtrV9oXclUhbnXWIw2s/Himre70mywpUWRFqCQZuX657+cZWp0pp7M1d5RHTyh6ym29w/bZRUEVd/ZURGGQrlSH2n2N+Kqam3OlMMeOfYmqcs7sD8p+wF1e6J0tN1d575uxkDiZTiWfiS/xu1aO/6Xv/pIfSPuaPKfmImElb8MZW9GZa9zuqqwsOcVLSh+rOz86+l+jbyahNTvtsKGL2LKnhZQreL0YufuTFfqbl+6qsQxjCHsyPX7Qh6TFv2wymZaSdIWWeNIjVc3imD1YftMdlUptixJbBV5rLtnuOj90xuWYFbIXc3Q+cCMdPgdOPk9wMVUGDVon5lHPn5wyNdLk8VbREV2tCEzo1yHAKMkagiHJqvK2J/BDAKOTh0KMyK29YM7zWgKXnr6quPlgYaoux1pFaZ/1UajtnKfL5nA8lYlcQfkRDEGNqxA1DYqmWUMqfLVR08AENWDy121SfdEYFRVBT1kEJoARWJEec2OeEsQ/mz/OKSQNrOs/SkTAEMS4KmwEJgS3aAhuBwyZ4RmaEzlWkWiW0iRB11TdUHVVZxh1rPUlFvek66xADYFFDSa0yFMCJYmc+Dr8f3gIGq+Kui4ahkKpqmoIIs0rnMKNOVVRRJr6LY+/h6BEF3LXcd99lh6COMMN8cu2zisYvYv8/ScMw6otiXctQ7VfIAwmn7YRIVmZNH1lbQlxmGYnpPZ1gEkM8wa9DkGETlmIejywkM5O/Y8ZuqbgT/eOv9+sfSbpJ5hW5T2EikOG5dnxAy9K0QPHMsEDZGH0EATjSBRFREGJAn077hbSn/mporfsAZmdS9WxtDfO5LKgLzu62/J+ebfnuxQRRtF7lwMYHtt6XR1R+QvcOFheX+gSbpv6uk4KpDW2w5aJMR9Zn3DvEgeTbx+2rVZRjzcWxu7KUOagn1af5zs1TDjue0HktzCJYniBpRleEhiJ6wP7/SEoYY8FvLbGqEA9jbcZ9QkiRGCWN2ACVHvgMlal6M5hw9mWacphIquJDD5m+u4V97tIBWfmaZU0g61Ae1YsE0PnlvYzPjWJ73mVteXMuWscDCmzH38AAiYg2jujzBus/I0xoq3pLGQoKl2WqZvxfC3LU001xGWNnVmGZ1ySdozle5R1CIspXpVINsXNORUEcRE4RbxFrYKteC7Lj322u7Y+J6PCY62bNh936Y7Ga3yeHV6ogWnaxboI+K0d6HoUjLRwnSTYqTt8DOjnlWcYFXvcxOf1xnsm844goeNayKwD190q3kG+u9jNRfO31yt785e7EuMM3R6Dtyn8dpYfl4J6HX7CeHtefiI8JTIlJ/Ot+TIfED+bnueuu9A6A4qiZejHF9UYKBnl7i6xdQCv/W2vc0jiChdgAmAZ4eomFVy1/a21yrj6RTJV9i35zb9z2BD5wwl+ZC7MPWqJq3oKm7RvwpLepXEv8qtc1x6B5N1YgNx/mr8Fr/8Cy1LCrYMJAAA=';

const prefix = process.env.PREFIX || '.';

const author = process.env.OWNER_NAME || 'Keith';

const packname = process.env.PACKNAME || 'keith';

const dev = process.env.OWNER_NUMBER || '263719495067';

const DevKeith = dev.split(",");

const antibot = process.env.ANTIBOT || 'false';

const botname = process.env.BOTNAME || 'KEITH-MD';

const mode = process.env.MODE || 'public';

const sessionName = "session";

const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';

const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';

const timezone = process.env.TIMEZONE || 'Africa/Nairobi';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  database,  
  botname, 
  mode,
  prefix,
  timezone,
  author,  
  url,
  gurl,
  antibot,
  packname,
  dev,
  DevKeith,  
  session,
};
