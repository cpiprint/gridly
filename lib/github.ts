const STAR_FALLBACK = 0;

const parseRepoFromUrl = (repoUrl: string) => {
  try {
    const parsed = new URL(repoUrl);
    const [owner, repo] = parsed.pathname.replace(/^\/+/, "").split("/");

    if (!owner || !repo) {
      return null;
    }

    return { owner, repo: repo.replace(/\.git$/, "") };
  } catch {
    return null;
  }
};

export const getGitHubRepoStars = async (repoUrl: string) => {
  const repo = parseRepoFromUrl(repoUrl);

  if (!repo) {
    return STAR_FALLBACK;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo.owner}/${repo.repo}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      return STAR_FALLBACK;
    }

    const data = (await response.json()) as { stargazers_count?: number };
    return data.stargazers_count ?? STAR_FALLBACK;
  } catch {
    return STAR_FALLBACK;
  }
};
