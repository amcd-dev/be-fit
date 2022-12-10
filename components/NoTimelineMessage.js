import { PlusIcon } from '@heroicons/react/20/solid'

export default function NoTimelineMessage() {
    return (
        <div className="text-center">
            <svg
                className="mx-auto mt-10 h-12 w-12 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
            >
                <path d="M23 12h-6v-2l3.39-4H17V4h6v2l-3.38 4H23v2m-8 4H9v-2l3.39-4H9V8h6v2l-3.38 4H15v2m-8 4H1v-2l3.39-4H1v-2h6v2l-3.38 4H7v2z" />
            </svg>
            <svg
                className="mx-auto h-12 w-12 text-gray-400"
                viewBox="0 0 16 16"
                fill="currentColor"
                height="1em"
                width="1em"
            >
                <path
                    fill="currentColor"
                    d="M8 16A8 8 0 108 0a8 8 0 000 16zM8 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13z"
                />
                <path
                    fill="currentColor"
                    d="M10 10.5c0 1.381-.895 2.5-2 2.5s-2-1.119-2-2.5S6.895 8 8 8s2 1.119 2 2.5zM6.5 5.313a.502.502 0 01-.354-.146c-.302-.302-.991-.302-1.293 0a.5.5 0 01-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 01-.354.853zM11.5 5.313a.502.502 0 01-.354-.146c-.302-.302-.991-.302-1.293 0a.5.5 0 01-.707-.707c.696-.696 2.011-.696 2.707 0a.5.5 0 01-.354.853z"
                />
            </svg>
            <h3 className="mt-2 mb-10 text-sm font-medium text-gray-900">Rest Day</h3>
        </div>
    )
}