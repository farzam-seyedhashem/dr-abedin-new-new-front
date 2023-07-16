/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from 'next/legacy/image'
import Typography from "./assets/Typography";
import Space from "./assets/Space";

export default function OpeningHour({className}) {

    return (
        <div className={`bg-background-light dark:bg-background-dark ${className}`}>
            <Typography type={"h3"} className="text-on-surface-light dark:text-on-surface-dark">
                Sales Hours
            </Typography>
            <Space/>
            <div
                className={"rounded-2xl border border-surface-variant-light dark:border-surface-variant-dark max-w-3xl overflow-x-auto"}>
                <table className={"w-full"}>
                    <thead className={""}>
                    <tr className={`dark:bg-surface-container-high-dark bg-surface-container-high-light divide-x divide-surface-variant-light dark:divide-surface-variant-dark`}>
                        <th className={" px-6 py-4 text-on-surface-light dark:text-on-surface-dark font-medium"}>
                            Title
                        </th>
                        <th className={"px-6 text-on-surface-light dark:text-on-surface-dark font-medium"}>
                            Specification
                        </th>
                    </tr>
                    </thead>
                    <tbody
                        className={"bg-background-light dark:bg-background-dark w-full text-left"}>
                    <tr>
                        <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                            Monday
                        </td>
                        <td
                            className={`px-6 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light  dark:text-on-surface-dark`}>
                            10:00 AM to 7:00 PM

                        </td>
                    </tr>
                    <tr>
                        <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                            Tuesday
                        </td>
                        <td
                            className={`px-6 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light  dark:text-on-surface-dark`}>
                            10:00 AM to 7:00 PM

                        </td>
                    </tr>
                    <tr>
                        <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                            Wednesday
                        </td>
                        <td
                            className={`px-6 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light  dark:text-on-surface-dark`}>
                            10:00 AM to 7:00 PM

                        </td>
                    </tr>
                    <tr>
                        <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                            Thursday
                        </td>
                        <td
                            className={`px-6 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                            10:00 AM to 7:00 PM

                        </td>
                    </tr>
                    <tr>
                        <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                            Friday
                        </td>
                        <td
                            className={`px-6 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light  dark:text-on-surface-dark`}>
                            10:00 AM to 7:00 PM

                        </td>
                    </tr>
                    <tr>
                        <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                            Saturday
                        </td>
                        <td
                            className={`px-6 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light  dark:text-on-surface-dark`}>
                            10:00 AM to 7:00 PM

                        </td>
                    </tr>
                    <tr>
                        <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                            Sunday
                        </td>
                        <td
                            className={`px-6 font-medium border-l border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light  dark:text-on-surface-dark`}>
                            Close
                        </td>
                    </tr>


                    </tbody>

                </table>
            </div>
        </div>
    )
}
