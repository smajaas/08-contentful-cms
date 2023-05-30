import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: '3r5q3w90elys',
  environments: 'master',
  accessToken: 'ZHS7nyiJoSW_ecHNhlStobqUhRdtia_4saV_jaqyNpQ',
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, projects };
};
