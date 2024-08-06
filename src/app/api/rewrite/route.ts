// import { NextResponse } from 'next/server';
// import generateCompletion  from '../../../lib/openai';

// // Define the POST handler using the Request and Response from the Fetch API
// export async function POST(request: Request) {
//   try {
//     // Attempt to parse the JSON body of the request
//     const body = await request.json();
//     const { inputText } = body;

//     // Validate the presence of inputText in the request body
//     if (!inputText) {
//       console.error('Missing inputText in request body:', body);
//       return NextResponse.json({ error: 'Input text is required' }, { status: 400 });
//     }

//     // Log the input text for debugging purposes
//     console.log('Input text:', inputText);

//     // Generate the completion using the OpenAI API
//     const result = await generateCompletion(inputText);
//     console.log('Generated completion:', result);

//     // Return the generated completion as a JSON response
//     return NextResponse.json({ rewrittenText: result }, { status: 200 });
//   } catch (error) {
//     // Log the error for debugging purposes
//     console.error('Error in POST handler:', error);

//     // Handle JSON parsing errors
//     if (error instanceof SyntaxError && error.message.includes('Unexpected end of JSON input')) {
//       return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
//     }

//     // Return a generic error message for other types of errors
//     return NextResponse.json({ error: 'Failed to generate completion' }, { status: 500 });
//   }
// }





import { NextResponse } from 'next/server';
import  generateCompletion  from '../../../lib/openai';

export async function POST(request: Request) {
  const { inputText, mode } = await request.json();

  if (!inputText) {
    return NextResponse.json({ error: 'Input text is required' }, { status: 400 });
  }

  const prompt = mode === 'Advanced'
    ? `Advanced rewriting prompt: ${inputText}`
    : `Basic rewriting prompt: ${inputText}`;

  try {
    const result = await generateCompletion(prompt);
    return NextResponse.json({ rewrittenText: result });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate completion' }, { status: 500 });
  }
}

// Optionally handle other HTTP methods (GET, PUT, DELETE) if needed
export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export function PUT() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export function DELETE() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
