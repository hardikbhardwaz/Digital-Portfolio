require("dotenv").config({ path: ".env.local" });
const { streamText, tool } = require('ai');
const { google } = require('@ai-sdk/google');
const { z } = require('zod');

async function run() {
    try {
        console.log("Starting streamText...");
        const result = await streamText({
            model: google('models/gemini-1.5-pro'),
            system: "TEST",
            messages: [{ role: "user", content: "hello" }],
            temperature: 0.7,
            tools: {
                captureLead: tool({
                    description: 'test',
                    parameters: z.object({
                        name: z.string(),
                    }),
                    execute: async ({ name }) => {
                        return { success: true };
                    },
                }),
            },
        });

        console.log("Success! stream resolved.");
    } catch (e) {
        console.error("FAIL:", e);
    }
}
run();
