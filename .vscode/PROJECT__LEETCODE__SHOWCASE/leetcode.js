document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-btn");
    const usernameInput = document.getElementById("user-input");

    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");

    // ✅ Toggle this flag to enable/disable demo data
    const useDemoService = true;

    // ✅ Total available problems per category (LeetCode approximate data)
    const TOTAL_PROBLEMS = {
        Easy: 700,
        Medium: 1400,
        Hard: 600
    };

    // Load last searched username from localStorage
    const lastUsername = localStorage.getItem("lastUsername");
    if (lastUsername) {
        usernameInput.value = lastUsername;
    }

    function validateUserName(username) {
        if (username.trim() === "") {
            alert("Username must not be empty");
            return false;
        }

        const regular = /^[a-zA-Z][a-zA-Z0-9_]{0,14}$/;
        const isMatching = regular.test(username);
        if (!isMatching) {
            alert("Invalid username. Username must start with a letter and contain only letters, numbers, or underscores.");
            return false;
        }

        return true;
    }

    async function fetchUserDetails(username) {
        if (useDemoService) {
            console.log("🔹 Using demo service");
            return getDemoStats();
        }

        const url = 'https://leetcode.com/graphql';

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `{
                      matchedUser(username: "${username}") {
                        submitStats {
                          acSubmissionNum {
                            difficulty
                            count
                          }
                        }
                      }
                    }`
                })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("📌 Fetched Data:", data);

            if (!data.data || !data.data.matchedUser) {
                throw new Error("User not found");
            }

            updateUI(data.data.matchedUser.submitStats.acSubmissionNum);
        } catch (error) {
            console.error("Error fetching data:", error);
            statsContainer.innerHTML = '<p class="error">No data found or an error occurred.</p>';
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function getDemoStats() {
        setTimeout(() => {
            const demoStats = [
                { difficulty: "Easy", count: 150 },
                { difficulty: "Medium", count: 200 },
                { difficulty: "Hard", count: 50 }
            ];
            console.log("📌 Demo Data Used:", demoStats);
            updateUI(demoStats);
        }, 1000);
    }

    function updateUI(stats) {
        const easyData = stats.find(item => item.difficulty === "Easy") || { count: 0 };
        const mediumData = stats.find(item => item.difficulty === "Medium") || { count: 0 };
        const hardData = stats.find(item => item.difficulty === "Hard") || { count: 0 };

        const easyPercent = ((easyData.count / TOTAL_PROBLEMS.Easy) * 100).toFixed(1);
        const mediumPercent = ((mediumData.count / TOTAL_PROBLEMS.Medium) * 100).toFixed(1);
        const hardPercent = ((hardData.count / TOTAL_PROBLEMS.Hard) * 100).toFixed(1);

        // Update progress circles
        easyLabel.textContent = `Easy: ${easyData.count} (${easyPercent}%)`;
        mediumLabel.textContent = `Medium: ${mediumData.count} (${mediumPercent}%)`;
        hardLabel.textContent = `Hard: ${hardData.count} (${hardPercent}%)`;

        easyProgressCircle.style.setProperty("--progress-degree", `${easyPercent}%`);
        mediumProgressCircle.style.setProperty("--progress-degree", `${mediumPercent}%`);
        hardProgressCircle.style.setProperty("--progress-degree", `${hardPercent}%`);

        // Update circle colors dynamically
        easyProgressCircle.style.background = `conic-gradient(#4CAF50 ${easyPercent}%, rgb(38, 6, 6) 0%)`;
        mediumProgressCircle.style.background = `conic-gradient(#FFA500 ${mediumPercent}%, rgb(46, 7, 7) 0%)`;
        hardProgressCircle.style.background = `conic-gradient(#FF5252 ${hardPercent}%, rgb(40, 4, 4) 0%)`;
    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value.trim();
        console.log("🔍 Logging username:", username);

        if (validateUserName(username)) {
            localStorage.setItem("lastUsername", username); // Save username to localStorage
            fetchUserDetails(username);
        }
    });

    // Optional: Add input event listener for real-time validation
    usernameInput.addEventListener("input", function () {
        if (usernameInput.value.length > 15) {
            usernameInput.value = usernameInput.value.slice(0, 15);
            alert("Username cannot exceed 15 characters.");
        }
    });
});