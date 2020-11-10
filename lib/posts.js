import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}

// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
// import remark from "remark";
// import html from "remark-html";

// const postsDirectory = path.join(process.cwd(), "posts");
// const folderNames = fs.readdirSync(postsDirectory);

// export function getSortedPostsData() {

//   // Get folder names under /posts
//   const allFoldersPostsData = folderNames.map((folderName) => {
//   // Get file names under /folder
//   console.log("folderName", folderName)
//   const folderDirectory = path.join(process.cwd(), "posts", folderName)
//   console.log( "foldersDirectory :", folderDirectory);
//   console.log("process.cwd()", process.cwd());
//   console.log("fs.readdirSync(folderDir...)", fs.readdirSync(folderDirectory));
//   const fileNames = fs.readdirSync(folderDirectory);

//     const allPostsData = fileNames.map((fileName) => {
//       // Remove ".md" from file name to get id
//       const id = fileName.replace(/\.md$/, "");

//       // Read markdown file as string
//       const fullPath = path.join(folderDirectory, fileName);
//       const fileContents = fs.readFileSync(fullPath, "utf8");

//       // Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents);

//       // Combine the data with the id
//       return {
//         id,
//         ...matterResult.data,
//       };
//     }
//     );
//     return {
//       folderName,
//       allPostsData,
//     }
//   }
//   );

//   console.log("allFoldersPostsData", allFoldersPostsData)
//   // Sort posts by date
//   return allFoldersPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

// export function getAllPostIds() {

//   const allIds = folderNames.map((folderName) => {
//   // Get file names under /folder
//   const folderDirectory = path.join(process.cwd(), "posts", folderName)
//   const fileNames = fs.readdirSync(folderDirectory);

//     return fileNames.map((fileName) => {
//       // Remove ".md" from file name to get id
//       return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// });
// }

// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);

//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   console.log(fullPath, fileContents);

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }
